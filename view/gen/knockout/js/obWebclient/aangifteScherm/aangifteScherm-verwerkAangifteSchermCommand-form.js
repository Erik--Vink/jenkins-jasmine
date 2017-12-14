// expanded with version 3.1.6
define(function (require) {
  var ko = require('knockout');
  var Form = require('nsx/form/form-model');
  var FormError = require('nsx/form/form-error-extender');
  var FormLayout = require('nsx/form/form-layout-extender');

  var PerformCommandAction = require('nsx/action/perform-command-action');
  var Trigger = require('nsx/triggers');
  var ErrorTrigger = require('nsx/error/error-trigger');

  var FieldType = require('nsx/field/field-type');

  var nsxApplication = require('nsx/nsx-application');
  var element = nsxApplication.getElement("obWebclient", "aangifteScherm");
  var errorTrigger = ErrorTrigger.defineTrigger();

  var formFields = [
    {
      fieldName: "commandId",
      type: FieldType.VALUE,
      key: "obWebclient.verwerkAangifteSchermCommand.commandId",
      isValueType: false
    },
  ];

  /**
   * @param {{
   *   data: Object,
   *   layoutConfig: Object
   * }} input
   * @param {{
   *   resetOn: TriggerOutput<any>
   * }} options
   * @return {{
   *    instance: NsxForm,
   *    submit: Trigger<void>
   * }}
   */
  function defineCommandForm(input, options) {
    options = options || {};

    var submit = Trigger.defineTrigger();

    var form = Form.defineFormModel({
      data: input.data,
      fields: formFields
    }, {
      resetOn: options.resetOn
    });

    var performAction = PerformCommandAction.definePerformCommandAction({
      commandName: "verwerkAangifteSchermCommand",
      instance: form.dataModel,
      trigger: submit,
      element: element
    });

    FormError.extendForm({
      model: form,
      fieldErrors: performAction.fieldErrorMap
    });

    FormLayout.extendForm({
      model: form,
      config: input.layoutConfig
    });

    performAction.errorMessage.subscribe(errorTrigger.error);

    return {
      instance: form,
      submit: submit,
      success: performAction.successEvent,
      error: performAction.errorEvent,
      complete: performAction.completeEvent
    }
  }

  return {
    defineCommandForm: defineCommandForm
  }
});