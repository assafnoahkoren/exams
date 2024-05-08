import {Observer, observer} from 'mobx-react';
import React from 'react';
import { rootStore } from '../state/RootStore';

interface ExampleComponentProps {
}

export const ExampleComponent: React.FC<ExampleComponentProps> = () => {
    return (
        <div>
            <h3>ExampleComponent works! 2</h3>
            <h5>{rootStore.timer1Store.name}</h5>
            <h5>
                <Observer>
                    {() => <>Seconds passed: {rootStore.timer1Store.secondsPassed}</>}
                </Observer>
                {/*<SecondsPassed store={rootStore.timer1Store} key="secondsPassed"/>*/}
            </h5>
            <button onClick={() => rootStore.timer1Store.stopTimer()}>Stop Timer</button>
        </div>
    );
};

const SecondsPassed = observer((props: {store: any, key: any}) => {
    console.log(props)
    console.log('SecondsPassed', props.store[props.key])
    return <span>
        {props.store[props.key]}
    </span>;
});

