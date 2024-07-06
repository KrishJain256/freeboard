"use client";
import {
    Excalidraw,
    convertToExcalidrawElements,
    WelcomeScreen,
    serializeAsJSON,
    getSceneVersion
} from "@excalidraw/excalidraw";

import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types";
import { AppState} from "@excalidraw/excalidraw/types/types";
import {BinaryFiles} from "@excalidraw/excalidraw/types/types";
import {serialize} from "node:v8";
import "@/lib/firebase/crud";
import { getDocumentData, addDocument } from "@/lib/firebase/crud";

interface ExcalidrawWrapperProps {
    identifier : string
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({identifier}) => {
    // console.info(convertToExcalidrawElements([{
    //     type: "rectangle",
    //     id: "rect-1",
    //     // width: 186.47265625,
    //     // height: 141.9765625,
    // },]));
    let lastSceneVersion = -1;
    let docId = "";


    const onChange = async (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => {
        console.log("invoked");

        const sceneVersion = getSceneVersion(elements)
        console.log("version",sceneVersion);
        if( sceneVersion > lastSceneVersion) {
            console.log("Saving");
            let content = serializeAsJSON(
                elements, appState, files, "database"
            );
            content = JSON.parse(content);
            // @ts-ignore
            docId = await addDocument("excalidraw_"+identifier, content, docId);
            localStorage.setItem("excalidraw"+"_"+identifier, docId);
            lastSceneVersion = sceneVersion;
        }

    }

    const retrieveInitialData = async () => {
        const lasttimeDoc = localStorage.getItem("excalidraw"+"_"+identifier);
        // @ts-ignore
        const content = await getDocumentData("excalidraw_"+identifier, lasttimeDoc)
        if (content != null) {
            console.log(content)
            if (JSON.parse(content) != null){
                return JSON.parse(content)
            }
        }
    }

    return (
        <div className="h-screen">
            <Excalidraw onChange={onChange} initialData={retrieveInitialData()}>
                <WelcomeScreen>
                    <WelcomeScreen.Hints.HelpHint/>
                    <WelcomeScreen.Hints.MenuHint/>
                    <WelcomeScreen.Hints.ToolbarHint/>
                </WelcomeScreen>
            </Excalidraw>
        </div>
    );
};
export default ExcalidrawWrapper;