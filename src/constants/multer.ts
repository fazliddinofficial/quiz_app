export function createPublicFileUrl(file: string) {
  const PORT = process.env.PORT;

  const host = process.env.HOST || `localhost:${PORT}`;

  const filePublicUrl = `http://${host}/${file.startsWith('public/') ? file.replace('public/', '') : file}`;

  return filePublicUrl;
}