import type { R2ObjectBody } from '@cloudflare/workers-types'

export default async function r2(
  filePath: string,
): Promise<{ file: R2ObjectBody['body']; headers: Record<string, string> }> {
  // oxlint-disable-next-line no-underscore-dangle
  const R2 = globalThis.R2 ?? globalThis.__env__?.R2

  if (!R2) throw new Error('R2 not found')

  const obj = await R2.get(filePath)

  if (!obj) throw new Error('File not found')

  const headers = {
    'Content-Type': mime.getType(filePath) ?? 'application/octet-stream',
    'Content-Disposition': `inline; filename="${filePath.split('/').pop()}"`,
  }

  return { file: obj.body, headers }
}
