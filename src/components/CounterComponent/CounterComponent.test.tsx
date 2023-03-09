import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {CounterComponent} from "./CounterComponent";

describe('CounterComponent',()=>{
    test('increments counter after delay', async () => {
         render(<CounterComponent />);

        const incrementButton = screen.getByText('Aumentar');
        fireEvent.click(incrementButton);

        const counterValue = await waitFor(() => screen.getByText('Contador 1'));
        expect(counterValue).toBeInTheDocument();
    });
})