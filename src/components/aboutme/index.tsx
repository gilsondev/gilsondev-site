import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Sobre mim</h3>
      <p className="pt-3 font-light text-sm text-justify">
        Nos últimos 12 anos atuei em projetos nas áreas{" "}
        <strong className="font-semibold">pública</strong> e em{" "}
        <strong className="font-semibold">startups</strong>. Trabalho com
        tecnologia desde muito jovem, aprendi a programar com diversas
        tecnologias, criando as mais variadas soluções como{" "}
        <strong className="font-semibold">
          Sistemas Web, APIs, Coletas de dados
        </strong>{" "}
        e <strong className="font-semibold">Data Pipelines</strong>.
      </p>
      <p className="pt-3 font-light text-sm text-justify">
        Tenho o objetivo de{" "}
        <strong className="font-semibold">
          impulsionar o crescimento das empresas
        </strong>
        , criar <strong className="font-semibold">produtos inovadores</strong>,
        além de ajudar várias{" "}
        <strong className="font-semibold">políticas públicas</strong>.
      </p>
    </div>
  );
};

export default AboutMe;
