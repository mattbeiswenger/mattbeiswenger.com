function CustomLink({ url, children }) {
  return (
    <a
      class="bg-light-grey p-1 rounded-lg whitespace-no-wrap"
      href={url}
      target="_blank"
    >
      {children}
    </a>
  )
}

export default CustomLink
