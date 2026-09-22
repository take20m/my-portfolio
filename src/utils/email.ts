// メールアドレスを HTML ソースに素のまま残さないための変換。
// 正規表現でアドレスを収集するスクレイパー対策が目的で、秘匿ではない。
// Cloudflare の Email Address Obfuscation と同じく 1 バイト XOR + 16 進で表す。

const KEY = 0x2b;

/** XOR したバイト列を 16 進文字列にする。先頭 2 桁はキー。 */
export function encodeEmail(email: string): string {
  let out = KEY.toString(16).padStart(2, "0");
  for (const char of email) {
    const code = char.charCodeAt(0);
    if (code > 0xff) {
      throw new Error(`encodeEmail は ASCII のみ対応しています: ${email}`);
    }
    out += (code ^ KEY).toString(16).padStart(2, "0");
  }
  return out;
}

/** encodeEmail の逆変換。検算用途で使う（実際の復元はクライアント側で行う）。 */
export function decodeEmail(encoded: string): string {
  const key = parseInt(encoded.slice(0, 2), 16);
  let out = "";
  for (let i = 2; i < encoded.length; i += 2) {
    out += String.fromCharCode(parseInt(encoded.slice(i, i + 2), 16) ^ key);
  }
  return out;
}

/** JS が無い環境向けの、人間には読めるが機械には拾いにくい表記。 */
export function readableEmail(email: string): string {
  const [user, domain = ""] = email.split("@");
  return `${user} [at] ${domain.replace(/\./g, " [dot] ")}`;
}
