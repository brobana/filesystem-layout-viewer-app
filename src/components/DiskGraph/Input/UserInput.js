import React, { useState } from 'react';

import classes from './UserInput.module.css';

const UserInput = (props) => {
  const [buttonAction, setButtonAction] = useState('prettify');
  const [textAreaContent, setTextAreaContent] = useState(
    JSON.stringify(props.volumeData, undefined, 4)
  );
  const onSubmitHandler = (evt) => {
    // Prevent the browser from reloading the page
    evt.preventDefault();

    // Read the form data
    const formData = new FormData(evt.target);
    const formJson = Object.fromEntries(formData.entries());
    const JsonObject = JSON.parse(formJson.userInput);
    var JSONInPrettyFormat = JSON.stringify(JsonObject, undefined, 4);
    setTextAreaContent(JSONInPrettyFormat);

    if (buttonAction === 'update') {
      props.onUpdateData(JsonObject);
    }
  };

  const onChangeHandler = () => {
    props.onResetView(!props.resetView);
  };

  const PRETTIFY_BTN_TITLE = 'Format the JSON document';
  const UPDATE_BTN_TITLE = 'Update the filesystem graph';
  const RESET_CB_TITLE =
    'Restore the view and nodes to their default positions';

  return (
    <div className={classes['user-input']}>
      <form onSubmit={onSubmitHandler}>
        <label className={classes['flex-item-label']}>
          <textarea
            onChange={(evt) => setTextAreaContent(evt.target.value)}
            name="userInput"
            value={textAreaContent}
            rows={30}
            cols={80}
            style={{ resize: 'none' }}
          />
        </label>
        <div className={classes.actions}>
          <button
            className={classes.button}
            type="submit"
            onClick={() => setButtonAction('prettify')}
            title={PRETTIFY_BTN_TITLE}
          >
            Prettify
          </button>
          <button
            className={classes.button}
            type="submit"
            onClick={() => setButtonAction('update')}
            title={UPDATE_BTN_TITLE}
          >
            Refresh
          </button>
          <label title={RESET_CB_TITLE}>
            <input
              id="checkbox1"
              type="checkbox"
              checked={props.resetView}
              onChange={onChangeHandler}
              title={RESET_CB_TITLE}
              style={{ accentColor: '#2ea44f' }}
            />
            Reset view
          </label>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
