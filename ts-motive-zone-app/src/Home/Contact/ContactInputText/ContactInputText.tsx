import { useDispatch, useSelector } from 'react-redux'

export default function ContactInputText(props: any) {
    const state: any = useSelector(state => state);
    const dispatch = useDispatch();
    const formData = { ...state.form };

    function handleOnchange(e: any, actionType: string) {
        dispatch({ type: actionType, payload: { data: e.target.value } });
    }
   
    return (
        <div>
            <input type='text' value={formData.dataToSend[props.name]}
                onChange={(e) => handleOnchange(e, props.actionType)}
                className={props.warningMess ? "warning" : ''} 
                placeholder={props.placeHolder}/>
            {props.warningMess && <span className="span--warning">
                {props.warningMess}</span>}
        </div>
    )
}