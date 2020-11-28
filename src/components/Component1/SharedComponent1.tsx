import tw, { styled } from 'twin.macro'

// Style 1: Only requires the tw import.
const Spacer = tw.div`py-4`
const Paragraph = tw.p`flex items-center py-8 justify-center text-xl text-white bg-blue-500`

// Style 2: Requires both the styled and tw imports.
const Container = styled.div`
  ${tw`flex justify-center`}
`

const Button = styled.button`
  ${tw`
    px-8 py-4 text-xl font-semibold text-blue-700 bg-transparent border border-blue-500
    rounded hover:bg-blue-500 hover:text-white hover:border-transparent`}
`

export type SharedComponent1Props = {
  name: string
}

const X = styled.div`
  background-color: black;
`

export const SharedComponent1 = ({ name }: SharedComponent1Props) => {
  return (
    <X>
      <Spacer />
      <Paragraph>Hello Create React App + Tailwind + Styled Components! {name}</Paragraph>
      <Spacer />
      <Container>
        <Button>Button</Button>
      </Container>
    </X>
  )
}
