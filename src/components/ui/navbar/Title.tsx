interface TitleProps {
  page: string;
}

export default function Title({ page }: TitleProps) {
  return (
    <h1>
        <b>TodoList:</b>
        &nbsp;
        <p>{page}</p>
    </h1>
  )
}