function CustomLink({ url, children }) {
  return (
    <a
      class="transition duration-200 ease-in-out bg-light-grey p-1 rounded-lg whitespace-no-wrap hover:bg-light-grey-hover"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default CustomLink
