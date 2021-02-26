import { useTranslation } from "react-i18next";

export const Translation = (props) => {
  const { t } = useTranslation();
  return <>{t(props.value)}</>;
};

export default Translation;
