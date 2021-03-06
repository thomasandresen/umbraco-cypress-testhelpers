import faker from "faker";
import camelize from "camelize";

export default class FormPickerDocumentTypePropertyBuilder {
  parentBuilder;

  alias;
  allowCultureVariant;
  dataTypeId;
  label;
  sortOrder;
  validation;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withDataTypeId(dataTypeId){
    this.dataTypeId = dataTypeId;
    return this;
  }
  withLabel(label){
    this.label = label;
    return this;
  }
  withAlias(alias){
    this.alias = alias;
    return this;
  }

  done(){
    return this.parentBuilder;
  }

  build() {

    var label = this.label || faker.random.uuid();
    var alias = this.alias || "a"+camelize(label);

    return {
      alias: alias,
      allowCultureVariant: this.allowCultureVariant || false,
      dataTypeId: this.dataTypeId || -1,
      label: label,
      sortOrder: this.sortOrder || 0,
      validation: this.validation || {mandatory: false, pattern: null},

    }
  }
}
