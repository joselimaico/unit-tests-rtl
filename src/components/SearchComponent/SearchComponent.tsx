import { useState } from 'react';

interface Props {
    data: string[];
}

function SearchComponent({ data }: Props) {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<string[]>(data);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setQuery(query);

        const filteredData = data.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase());
        });

        setResults(filteredData);
    };

    return (
        <div>
            <input type="text" placeholder="Search" data-testid={"prueba"} value={query} onChange={handleInputChange} />

                {results.map((item, index) => (
                    <div key={index}>
                        <h3>{item}</h3>
                    </div>
                ))}
        </div>
    );
}

export default SearchComponent;
