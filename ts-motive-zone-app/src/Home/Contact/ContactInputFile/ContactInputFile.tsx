import { useDispatch, useSelector } from 'react-redux'


export default function ContactInputFile(props: any) {
  const state: any = useSelector(state => state);
  const dispatch = useDispatch();
  const formData = { ...state.form };
  const fileChosen = formData.dataToSend.file;
  const warningMess = formData.chooseFileWarningMess;
  console.log(warningMess);
  

  function handleChooseFile() {

  }

  function handleChangeInputFile(e: any) {
    const file = e.target.files[0];
    dispatch({ type: 'CHECK_CHOOSE_FILE', payload: { data: file } });
  }

  return (
    <div>
      <div className="form__input-file-group">
        <input type="file" name="file" id="contact-file"
          className="custom-file-input"
          onChange={(e) => handleChangeInputFile(e)} />
        <label htmlFor="contact-file" onClick={handleChooseFile}>
          <i className="fa fa-upload"></i>
          Choose a file</label>
        <span id="file-chosen">{fileChosen ? fileChosen.name : 'No file chosen'}</span>
      </div>
      {/* {warningMess && <span className="span--warning">
        {warningMess}</span>} */}
    </div>
  )
}