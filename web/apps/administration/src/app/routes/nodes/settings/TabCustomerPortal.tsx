import { PublicEventSettings, useUpdateEventMutation } from "@/api";
import { Button, LinearProgress, Stack } from "@mui/material";
import { FormTextField } from "@stustapay/form-components";
import { toFormikValidationSchema } from "@stustapay/utils";
import { Form, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { z } from "zod";

const CustomerPortalSettingsSchema = z.object({
  customer_portal_contact_email: z.string(),
});

type CustomerPortalSettings = z.infer<typeof CustomerPortalSettingsSchema>;

export const TabCustomerPortal: React.FC<{ nodeId: number; eventSettings: PublicEventSettings }> = ({
  nodeId,
  eventSettings,
}) => {
  const { t } = useTranslation();
  const [updateEvent] = useUpdateEventMutation();

  const handleSubmit = (values: CustomerPortalSettings, { setSubmitting }: FormikHelpers<CustomerPortalSettings>) => {
    setSubmitting(true);
    updateEvent({ nodeId: nodeId, updateEvent: { ...eventSettings, ...values } })
      .unwrap()
      .then(() => {
        setSubmitting(false);
        toast.success(t("settings.updateEventSucessful"));
      })
      .catch((err) => {
        setSubmitting(false);
        toast.error(t("settings.updateEventFailed", { reason: err.error }));
      });
  };
  return (
    <Formik
      initialValues={eventSettings as CustomerPortalSettings} // TODO: figure out a way of not needing to cast this
      onSubmit={handleSubmit}
      validationSchema={toFormikValidationSchema(CustomerPortalSettingsSchema)}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <FormTextField
              label={t("settings.customerPortal.contact_email")}
              name="customer_portal_contact_email"
              formik={formik}
            />

            {formik.isSubmitting && <LinearProgress />}
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={formik.isSubmitting || Object.keys(formik.touched).length === 0}
            >
              {t("save")}
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};