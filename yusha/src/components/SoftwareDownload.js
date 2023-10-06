import AWS from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
import MultiLingualContent from "./MultilingualContent/multilingualContent";
import {HashLink} from "react-router-hash-link";
import React from "react";

export default function SoftwareDownload(){
    const region = "us-west-2";
    const accessKeyId = "AKIA4YOOEBDDQESOL3XZ";
    const secretAccessKey = "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";

    AWS.config.update({
        region:region,
        credentials:new AWS.Credentials(accessKeyId,secretAccessKey)
    });

    const s3 = new AWS.S3();

    return(
        <div>
            <div className="container ">
                <div className="row about-banner-row justify-content-center align-items-center">
                    <div className="col-lg-12 text-center about-banner-con  banner_content">
                        <h1><MultiLingualContent contentID="about_hero_title" /></h1>
                        <h4><MultiLingualContent contentID="about_hero_sub" /></h4>
                        <div className="flex-row">
                            <div className="banner-btnbox soft-btnbox">
                                <div>
                                    <a className="btn cs-btn-software"
                                       href={s3.getSignedUrl("getObject",{
                                        Bucket: "yushatestzip",
                                        Key: "animals_hero_toucan.zip",
                                       })}

                                    >Download Mac

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}