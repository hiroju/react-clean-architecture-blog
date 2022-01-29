type EntityPostProperty = {
  id: string
  title: string
  content: string
  date: string
}

export class EntityPost {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly date: string

  constructor(props: EntityPostProperty) {
    this.id = props.id
    this.title = props.title
    this.content = props.content
    this.date = props.date
  }
}
