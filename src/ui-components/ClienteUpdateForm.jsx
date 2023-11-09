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
import { getCliente } from "../graphql/queries";
import { updateCliente } from "../graphql/mutations";
export default function ClienteUpdateForm(props) {
  const {
    id: idProp,
    cliente: clienteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    lugar: "",
    ultimaConsulta: "",
    profesional: "",
    email: "",
    phoneNumber: "",
    peso: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [lugar, setLugar] = React.useState(initialValues.lugar);
  const [ultimaConsulta, setUltimaConsulta] = React.useState(
    initialValues.ultimaConsulta
  );
  const [profesional, setProfesional] = React.useState(
    initialValues.profesional
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [peso, setPeso] = React.useState(initialValues.peso);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clienteRecord
      ? { ...initialValues, ...clienteRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setLugar(cleanValues.lugar);
    setUltimaConsulta(cleanValues.ultimaConsulta);
    setProfesional(cleanValues.profesional);
    setEmail(cleanValues.email);
    setPhoneNumber(cleanValues.phoneNumber);
    setPeso(cleanValues.peso);
    setErrors({});
  };
  const [clienteRecord, setClienteRecord] = React.useState(clienteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getCliente.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCliente
        : clienteModelProp;
      setClienteRecord(record);
    };
    queryData();
  }, [idProp, clienteModelProp]);
  React.useEffect(resetStateValues, [clienteRecord]);
  const validations = {
    nombre: [],
    lugar: [],
    ultimaConsulta: [],
    profesional: [],
    email: [{ type: "Email" }],
    phoneNumber: [{ type: "Phone" }],
    peso: [],
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
          nombre: nombre ?? null,
          lugar: lugar ?? null,
          ultimaConsulta: ultimaConsulta ?? null,
          profesional: profesional ?? null,
          email: email ?? null,
          phoneNumber: phoneNumber ?? null,
          peso: peso ?? null,
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
            query: updateCliente.replaceAll("__typename", ""),
            variables: {
              input: {
                id: clienteRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClienteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              lugar,
              ultimaConsulta,
              profesional,
              email,
              phoneNumber,
              peso,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Lugar"
        isRequired={false}
        isReadOnly={false}
        value={lugar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              lugar: value,
              ultimaConsulta,
              profesional,
              email,
              phoneNumber,
              peso,
            };
            const result = onChange(modelFields);
            value = result?.lugar ?? value;
          }
          if (errors.lugar?.hasError) {
            runValidationTasks("lugar", value);
          }
          setLugar(value);
        }}
        onBlur={() => runValidationTasks("lugar", lugar)}
        errorMessage={errors.lugar?.errorMessage}
        hasError={errors.lugar?.hasError}
        {...getOverrideProps(overrides, "lugar")}
      ></TextField>
      <TextField
        label="Ultima consulta"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={ultimaConsulta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              lugar,
              ultimaConsulta: value,
              profesional,
              email,
              phoneNumber,
              peso,
            };
            const result = onChange(modelFields);
            value = result?.ultimaConsulta ?? value;
          }
          if (errors.ultimaConsulta?.hasError) {
            runValidationTasks("ultimaConsulta", value);
          }
          setUltimaConsulta(value);
        }}
        onBlur={() => runValidationTasks("ultimaConsulta", ultimaConsulta)}
        errorMessage={errors.ultimaConsulta?.errorMessage}
        hasError={errors.ultimaConsulta?.hasError}
        {...getOverrideProps(overrides, "ultimaConsulta")}
      ></TextField>
      <TextField
        label="Profesional"
        isRequired={false}
        isReadOnly={false}
        value={profesional}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              lugar,
              ultimaConsulta,
              profesional: value,
              email,
              phoneNumber,
              peso,
            };
            const result = onChange(modelFields);
            value = result?.profesional ?? value;
          }
          if (errors.profesional?.hasError) {
            runValidationTasks("profesional", value);
          }
          setProfesional(value);
        }}
        onBlur={() => runValidationTasks("profesional", profesional)}
        errorMessage={errors.profesional?.errorMessage}
        hasError={errors.profesional?.hasError}
        {...getOverrideProps(overrides, "profesional")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              lugar,
              ultimaConsulta,
              profesional,
              email: value,
              phoneNumber,
              peso,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              lugar,
              ultimaConsulta,
              profesional,
              email,
              phoneNumber: value,
              peso,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Peso"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={peso}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              lugar,
              ultimaConsulta,
              profesional,
              email,
              phoneNumber,
              peso: value,
            };
            const result = onChange(modelFields);
            value = result?.peso ?? value;
          }
          if (errors.peso?.hasError) {
            runValidationTasks("peso", value);
          }
          setPeso(value);
        }}
        onBlur={() => runValidationTasks("peso", peso)}
        errorMessage={errors.peso?.errorMessage}
        hasError={errors.peso?.hasError}
        {...getOverrideProps(overrides, "peso")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || clienteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || clienteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
