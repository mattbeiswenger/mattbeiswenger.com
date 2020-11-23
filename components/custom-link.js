function CustomLink({ url, children }) {
  return (
    <a
      class="transition duration-300 ease-in-out bg-light-grey p-1 rounded-lg whitespace-no-wrap hover:bg-light-grey-hover"
      href={url}
      target="_blank"
    >
      {children}
    </a>
  )
}

export default CustomLink
