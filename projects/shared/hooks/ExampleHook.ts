import { useState, useEffect } from 'react';

export const useExampleHook = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data or perform any side effects here
        // For example:
        const fetchData = async () => {
          const response = await fetch('https://dummyjson.com/products/1');
          const data = await response.json();
          setData(data);
        };
        fetchData();

        // Clean up any resources or subscriptions here
        // For example:
        return () => {
          // Clean up logic here
        };
    }, []);

    useEffect(() => {
        // This effect will run every time the data changes
        // For example:
        if (data) {
            console.log('Data has changed:', data);
        }
    }, [data]);

    return data;
};
