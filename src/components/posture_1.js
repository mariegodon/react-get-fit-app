import React from 'react';
import {Input, Icon} from 'react-materialize';


class Posture extends React.Component {
    
    constructor(props){

    super(props);
    
    }
    
    render () {
        
        return (
            <div className='row' className='posture'>
                <div className='col s12' className='posture__title'>Posture</div>
                <div className='row'>
                    <div className='col m2 s2'>Sitting</div>
                    <div className='col m4 s4'>
                        <Input name='sitting' type='radio' value='good' label='good' />
                        <Input name='sitting' type='radio' value='fair' label='fair' />
                        <Input name='sitting' type='radio' value='poor' label='poor' />
                    </div>
                    <div className='col m2 s2'>Standing</div>                    
                    <div className='col m4 l4'>
                        <Input name='standing' type='radio' value='good' label='good' />
                        <Input name='standing' type='radio' value='fair' label='fair' />
                        <Input name='standing' type='radio' value='poor' label='poor' />
                    </div>
                    <div className='col m1 s1'>Lordosis</div>                    
                    <div className='col m3 l3'>
                        <Input name='lordorsis' type='radio' value='red' label='red' />
                        <Input name='lordosis' type='radio' value='acc' label='acc' />
                        <Input name='lordosis' type='radio' value='normal' label='normal' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Posture;