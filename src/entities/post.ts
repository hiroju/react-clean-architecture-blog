type EntityPostProperty = {
  id: string
  title: string
  date: string
}

export class EntityPost {
  readonly id: string
  readonly title: string
  readonly date: string

  constructor(props: EntityPostProperty) {
    this.id = props.id
    this.title = props.title
    this.date = props.date
  }
}
