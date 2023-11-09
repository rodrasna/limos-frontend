/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createDiet } from "../graphql/mutations";
export default function DietCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    clientID: "",
    client: "",
    dateDelivery: "",
    dateConsult: "",
    timeRealization: "",
    calories: "",
  };
  const [clientID, setClientID] = React.useState(initialValues.clientID);
  const [client, setClient] = React.useState(initialValues.client);
  const [dateDelivery, setDateDelivery] = React.useState(
    initialValues.dateDelivery
  );
  const [dateConsult, setDateConsult] = React.useState(
    initialValues.dateConsult
  );
  const [timeRealization, setTimeRealization] = React.useState(
    initialValues.timeRealization
  );
  const [calories, setCalories] = React.useState(initialValues.calories);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClientID(initialValues.clientID);
    setClient(initialValues.client);
    setDateDelivery(initialValues.dateDelivery);
    setDateConsult(initialValues.dateConsult);
    setTimeRealization(initialValues.timeRealization);
    setCalories(initialValues.calories);
    setErrors({});
  };
  const validations = {
    clientID: [{ type: "Required" }],
    client: [],
    dateDelivery: [],
    dateConsult: [],
    timeRealization: [],
    calories: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          clientID,
          client,
          dateDelivery,
          dateConsult,
          timeRealization,
          calories,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createDiet.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DietCreateForm")}
      {...rest}
    >
      <TextField
        label="Client id"
        isRequired={true}
        isReadOnly={false}
        value={clientID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID: value,
              client,
              dateDelivery,
              dateConsult,
              timeRealization,
              calories,
            };
            const result = onChange(modelFields);
            value = result?.clientID ?? value;
          }
          if (errors.clientID?.hasError) {
            runValidationTasks("clientID", value);
          }
          setClientID(value);
        }}
        onBlur={() => runValidationTasks("clientID", clientID)}
        errorMessage={errors.clientID?.errorMessage}
        hasError={errors.clientID?.hasError}
        {...getOverrideProps(overrides, "clientID")}
      ></TextField>
      <TextField
        label="Client"
        isRequired={false}
        isReadOnly={false}
        value={client}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              client: value,
              dateDelivery,
              dateConsult,
              timeRealization,
              calories,
            };
            const result = onChange(modelFields);
            value = result?.client ?? value;
          }
          if (errors.client?.hasError) {
            runValidationTasks("client", value);
          }
          setClient(value);
        }}
        onBlur={() => runValidationTasks("client", client)}
        errorMessage={errors.client?.errorMessage}
        hasError={errors.client?.hasError}
        {...getOverrideProps(overrides, "client")}
      ></TextField>
      <TextField
        label="Date delivery"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateDelivery}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              client,
              dateDelivery: value,
              dateConsult,
              timeRealization,
              calories,
            };
            const result = onChange(modelFields);
            value = result?.dateDelivery ?? value;
          }
          if (errors.dateDelivery?.hasError) {
            runValidationTasks("dateDelivery", value);
          }
          setDateDelivery(value);
        }}
        onBlur={() => runValidationTasks("dateDelivery", dateDelivery)}
        errorMessage={errors.dateDelivery?.errorMessage}
        hasError={errors.dateDelivery?.hasError}
        {...getOverrideProps(overrides, "dateDelivery")}
      ></TextField>
      <TextField
        label="Date consult"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateConsult}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              client,
              dateDelivery,
              dateConsult: value,
              timeRealization,
              calories,
            };
            const result = onChange(modelFields);
            value = result?.dateConsult ?? value;
          }
          if (errors.dateConsult?.hasError) {
            runValidationTasks("dateConsult", value);
          }
          setDateConsult(value);
        }}
        onBlur={() => runValidationTasks("dateConsult", dateConsult)}
        errorMessage={errors.dateConsult?.errorMessage}
        hasError={errors.dateConsult?.hasError}
        {...getOverrideProps(overrides, "dateConsult")}
      ></TextField>
      <TextField
        label="Time realization"
        isRequired={false}
        isReadOnly={false}
        value={timeRealization}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              client,
              dateDelivery,
              dateConsult,
              timeRealization: value,
              calories,
            };
            const result = onChange(modelFields);
            value = result?.timeRealization ?? value;
          }
          if (errors.timeRealization?.hasError) {
            runValidationTasks("timeRealization", value);
          }
          setTimeRealization(value);
        }}
        onBlur={() => runValidationTasks("timeRealization", timeRealization)}
        errorMessage={errors.timeRealization?.errorMessage}
        hasError={errors.timeRealization?.hasError}
        {...getOverrideProps(overrides, "timeRealization")}
      ></TextField>
      <TextField
        label="Calories"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={calories}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              clientID,
              client,
              dateDelivery,
              dateConsult,
              timeRealization,
              calories: value,
            };
            const result = onChange(modelFields);
            value = result?.calories ?? value;
          }
          if (errors.calories?.hasError) {
            runValidationTasks("calories", value);
          }
          setCalories(value);
        }}
        onBlur={() => runValidationTasks("calories", calories)}
        errorMessage={errors.calories?.errorMessage}
        hasError={errors.calories?.hasError}
        {...getOverrideProps(overrides, "calories")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
