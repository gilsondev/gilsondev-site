import { useTranslations } from "next-intl";
import { calculateExperienceYearsFromToday } from "@/lib/utils";
import React from "react";

const AboutMe = () => {
  const t = useTranslations("AboutMe");
  const description = ["description_p1", "description_p2"] as const;

  return (
    <div>
      <h3 className="text-xl font-semibold dark:text-gray-200">{t("title")}</h3>
      {description.map((key) => (
        <p
          key={key}
          className="pt-3 font-thin text-sm lg:text-base text-justify dark:text-gray-200"
        >
          {t.rich(key, {
            emp: (chunks) => <strong className="font-bold">{chunks}</strong>,
          })}
        </p>
      ))}

      {/* <p className="pt-3 font-thin text-sm lg:text-base text-justify dark:text-gray-200">
        Nos últimos {calculateExperienceYearsFromToday()} anos atuei em projetos
        nas áreas <strong className="font-bold">pública</strong> e em{" "}
        <strong className="font-bold">startups</strong>. Trabalho com tecnologia
        desde muito jovem, aprendi a programar com diversos projetos, criando as
        mais variadas soluções como{" "}
        <strong className="font-bold">
          Sistemas Desktop, Sistemas Web, APIs, Web Scraping
        </strong>{" "}
        e <strong className="font-bold">Data Pipelines</strong>.
      </p>
      <p className="pt-3 font-thin text-sm lg:text-base text-justify dark:text-gray-200">
        Tenho o objetivo de{" "}
        <strong className="font-bold">
          impulsionar o crescimento das empresas{" "}
        </strong>
        através da <strong className="font-bold">resolução de problemas</strong>
        , criar <strong className="font-bold">produtos inovadores</strong>, além
        de ajudar várias{" "}
        <strong className="font-bold">políticas públicas</strong> por meio do{" "}
        <strong className="font-bold">Software Livre</strong>.
      </p> */}
    </div>
  );
};

export default AboutMe;
