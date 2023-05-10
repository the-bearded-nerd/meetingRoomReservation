import { useRef } from "react";

import Select from "../Select/Select";

import "./ReservationForm.styles.css";

const ReservationForm = (props) => {
  const {
    towerOptions,
    floorOptions,
    meetingroomOptions,
    durationOptions,
    defaultOption,
  } = props;
  const formRef = useRef(null);
  const towerRef = useRef(null);
  const floorRef = useRef(null);
  const meetingroomRef = useRef(null);
  const durationRef = useRef(null);
  const dateRef = useRef(null);
  const textareaRef = useRef(null);

  const onReset = () => {
    formRef.current.reset();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      tower: towerRef.current.value,
      floor: floorRef.current.value,
      meetingroom: meetingroomRef.current.value,
      duration: durationRef.current.value,
      date: dateRef.current.value,
      comment: textareaRef.current.value,
    };
    console.log(formValues);
  };
  return (
    <form className="booking-form" onSubmit={onSubmit} ref={formRef}>
      <fieldset className="form-fieldset">
        <legend className="form-legend">Местоположение</legend>
        <Select
          selectId="tower-select"
          defaultOption={defaultOption}
          selectOptions={towerOptions}
          labelText="Выберите башню:"
          ref={towerRef}
          isRequired={true}
        />

        <Select
          selectId="floor-select"
          defaultOption={defaultOption}
          selectOptions={floorOptions}
          labelText="Выберите этаж:"
          ref={floorRef}
          isRequired={true}
        />

        <Select
          selectId="meeting_room-select"
          defaultOption={defaultOption}
          selectOptions={meetingroomOptions}
          labelText="Выберите переговорку:"
          ref={meetingroomRef}
          isRequired={true}
        />
      </fieldset>
      <fieldset className="form-fieldset">
        <legend className="form-legend">Дата и продолжительность</legend>
        <div className="date-input-container">
          <label htmlFor="date-input">Выберите дату: </label>
          <input
            id="date-input"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            ref={dateRef}
            required
          />
        </div>
        <Select
          selectId="duration-select"
          defaultOption={defaultOption}
          selectOptions={durationOptions}
          labelText="Выберите длительность:"
          ref={durationRef}
          isRequired={true}
        />
      </fieldset>
      <fieldset className="form-fieldset">
        <legend className="form-legend">Комментарий к бронированию:</legend>
        <textarea
          className="comments"
          id="comments"
          rows="10"
          ref={textareaRef}
        />
      </fieldset>

      <div className="btn-container">
        <button className="btn btn-submit" type="submit">
          Отправить
        </button>
        <button className="btn btn-reset" type="button" onClick={onReset}>
          Очистить
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
