function SocialLink({ url, children }) {
  return (
    <a
      href={url}
      className="flex justify-center items-center h-12 w-12 rounded-full bg-light-grey transition duration-200 hover:bg-light-grey-hover"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default SocialLink
