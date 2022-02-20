import "./skills.scss"

import python from "../../assets/python (1).svg"
import js from "../../assets/javascript (1).svg"
import react_ico from "../../assets/react (1).svg"
import express from "../../assets/express (1).svg"
import docker from "../../assets/docker-icon (1).svg"
import java from "../../assets/java (1).svg"
import cpp from "../../assets/c-plusplus (1).svg"
import tensorflow from "../../assets/tensorflow (1).svg"
import node from "../../assets/nodejs-icon (1).svg"
import mongo from "../../assets/mongodb (1).svg"
import mysql from "../../assets/mysql (1).svg"
import figma from "../../assets/figma (1).svg"

import SkillsIcon from "./skill-icon"


function Skills(){
    return(
        <div id="skills" className="skills">
            <h2 className="skills-header">Skills</h2>
            <div className="skills-container">
                <SkillsIcon ico={python} text="Python"/>
                <SkillsIcon ico={js} text="Javascript"/>
                <SkillsIcon ico={react_ico} text="React"/>
                <SkillsIcon ico={express} text="Express"/>
                <SkillsIcon ico={java} text="Java"/>
                <SkillsIcon ico={cpp} text="C++"/>
                <SkillsIcon ico={node} text="Node.js"/>
                <SkillsIcon ico={docker} text="Docker"/>
                <SkillsIcon ico={figma} text="Figma"/>
                <SkillsIcon ico={tensorflow} text="Tensorflow"/>
                <SkillsIcon ico={mongo} text="MongoDB"/>
                <SkillsIcon ico={mysql} text="MySql"/>
            </div>
        </div>
    )
}


export default Skills