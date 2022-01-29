export type PaginationResult<T> = {
  nodes: T[]
  pagination: Pagination
}

export type Pagination = {
  hasMore: boolean
  hasPrevious: boolean
}
