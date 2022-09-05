export default function BookCard({ title, author, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col px-4 py-3 bg-white border dark:border-none dark:bg-neutral-800 rounded-xl"
    >
      <span className="font-semibold dark:text-neutral-100 text-neutral-800">
        {title}
      </span>
      <span className="text-sm dark:text-neutral-400 text-neutral-500">
        {author}
      </span>
    </a>
  )
}
