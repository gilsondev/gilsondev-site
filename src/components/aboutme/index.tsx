import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold dark:text-gray-200">Sobre mim</h3>
      <p className="pt-3 font-thin text-sm lg:text-base text-justify dark:text-gray-200">
        Nos últimos 12 anos atuei em projetos nas áreas{" "}
        <strong className="font-bold">pública</strong> e em{" "}
        <strong className="font-bold">startups</strong>. Trabalho com tecnologia
        desde muito jovem, aprendi a programar com diversas tecnologias, criando
        as mais variadas soluções como{" "}
        <strong className="font-bold">
          Sistemas Web, APIs, Coletas de dados
        </strong>{" "}
        e <strong className="font-bold">Data Pipelines</strong>.
      </p>
      <p className="pt-3 font-thin text-sm lg:text-base text-justify dark:text-gray-200">
        Tenho o objetivo de{" "}
        <strong className="font-bold">
          impulsionar o crescimento das empresas
        </strong>
        , criar <strong className="font-bold">produtos inovadores</strong>, além
        de ajudar várias{" "}
        <strong className="font-bold">políticas públicas</strong>.
      </p>
    </div>
  );
};

export default AboutMe;
