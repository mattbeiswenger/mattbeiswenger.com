import Parser from 'rss-parser'

const feedParser = new Parser()

export const BookCollections = Object.freeze({
  READING: 'pP75A',
  READ: 'tg6DY',
})

export const getBooksFromCollection = async (collectionId) => {
  const { items } = await feedParser.parseURL(
    `https://oku.club/rss/collection/${collectionId}`
  )
  return items
}

/**
 * @returns Object where the key is the collection name and value is array of books
 * in that collection
 */
export const getAllBooks = () => {
  const collections = Object.entries(BookCollections)
  return collections.reduce(async (books, [collectionName, collectionId]) => {
    const items = await getBooksFromCollection(collectionId)
    books = await books // Need to await the promise from previous call
    books[collectionName] = items
    return books
  }, {})
}
