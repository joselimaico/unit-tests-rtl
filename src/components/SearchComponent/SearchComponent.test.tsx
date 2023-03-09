import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import SearchComponent from './SearchComponent';
import {NAMES} from "../../data/data";


describe('SearchComponent',()=>{

    test('render component', () => {
        render(<SearchComponent data={[]} />);
    });

    test('render name', () => {
        render(<SearchComponent data={['Francisco']} />);
        const name = screen.getByText('Francisco');
        const id = screen.getByTestId('prueba')
        console.log(id);
        expect(name).toBeInTheDocument();
    });

    test('handles input change', () => {
         render(<SearchComponent data={NAMES} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'JOS' } });
        expect(input.getAttribute('value')).toBe('JOS');
        expect(screen.getByText('Jossue')).toBeInTheDocument();
        expect(screen.queryByText('orange')).not.toBeInTheDocument();
    });

    test('handles async search', async () => {
        render(<SearchComponent data={NAMES} />);

        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'Adri' } });

        const searchResult = await screen.findByText('Adri');

        expect(searchResult).toBeInTheDocument();
    });
});