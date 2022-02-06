export default function formatDate(date: string): string {
  return new Date(date).toJSON().slice(0, 10).split("-").reverse().join("/");
}
