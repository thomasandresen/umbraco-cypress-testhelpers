import FormFieldBuilderBase from "./formFieldBuilderBase";

export default class FormShortAnswerFieldBuilder extends FormFieldBuilderBase  {
  fieldTypeId = '3f92e01b-29e2-4a30-bf33-9df5580ed52c';
  removePrevalueEditor = true;

  withDefaultValue(defaultValue){
    this.settings.DefaultValue = defaultValue;

    return this;
  }

  withPlaceholder(placeholder){
    this.settings.Placeholder = placeholder;

    return this;
  }
}
