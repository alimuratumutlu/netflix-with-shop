import React from "react";

// Form Tools Import
import { Formik } from "formik";
import * as Yup from "yup";

// i18next Multi Language Support
import "../../helpers/i18next";
import { useTranslation } from "react-i18next";

// Service Import
import authService from "../../services/auth.service";
import AuthLayout from "../../layouts/AuthLayout";

export default function Login() {
  // i18next Multi Language Support
  const { t } = useTranslation();

  const handleLogin = () => {
    authService.login();
  };

  return (
    <AuthLayout>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number."),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;
          return (
            <form className="form-group" onSubmit={handleLogin}>
              <h2 className="font-weight-bold pb-4">{t("login")}</h2>
              <input
                name="email"
                type="text"
                placeholder={t("enteryouremail")}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${
                  errors.email && touched.email && "error"
                }`}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <small id="emailHelp" className="form-text text-muted mb-3">
                {t("gdpr")}
              </small>
              <input
                name="password"
                type="password"
                placeholder={t("enteryourpassword")}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${
                  errors.password && touched.password && "error"
                }`}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <div className="form-check py-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember-check"
                />
                <label className="form-check-label" htmlFor="remember-check">
                  {t("rememberme")}
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-block"
                disabled={isSubmitting}
              >
                {t("logmein")}
              </button>
              <button className="btn btn-primary btn-block">
                {t("signup")}
              </button>
            </form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
}
