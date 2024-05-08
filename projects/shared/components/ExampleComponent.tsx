import { observer } from 'mobx-react';
import React from 'react';
import { rootStore } from '../state/RootStore';

interface ExampleComponentProps {
}

export const ExampleComponent: React.FC<ExampleComponentProps> = () => {
    return (
        <div>
            <h3>ExampleComponent works!</h3>
            <h5>{rootStore.timer1Store.name}</h5>
            <h5>
                <SecondsPassed />
            </h5>
            <button onClick={() => rootStore.timer1Store.stopTimer()}>Stop Timer</button>
        </div>
    );
};

const SecondsPassed = observer(() => {
    return <span>
        {rootStore.timer1Store.secondsPassed}
    </span>;
});

