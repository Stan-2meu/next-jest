import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tester from "@/components/Tester"
 
describe('Home', () => {
  it('renders a text', () => {
    render(<Tester />)
 
    const component = screen.getAllByText("tester");
    expect(component).toHaveLength(1);
  })
})