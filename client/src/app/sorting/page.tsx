import { getMobilesData } from '@/services/mobiles.services';
import React from 'react';

const SortingPage = async () => {
    const mobiles = await getMobilesData();
    console.log(mobiles, 'mobiles');

    return (
        <div>
            this is sorting page.
        </div>
    );
};

export default SortingPage;