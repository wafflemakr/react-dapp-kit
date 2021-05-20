import React, { useState, useContext } from "react";
import { Row, Button, Spinner } from "react-bootstrap";
import { Web3Context } from "../web3";
import ipfs from "../utils/ipfs";

// Components
import notify from "../utils/notify";

// Upload Loan Details to IPFS and
// trigger Loan Creation to Smart Contract
export default function Loan() {
  const { account } = useContext(Web3Context);

  // Component State
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Load File and convert to Buffer
  const loadFile = (_file) => {
    setFileName(_file.name);
    var reader = new FileReader();
    reader.readAsArrayBuffer(_file);
    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };
  };

  // Add content to IPFS and return HASH
  const addToIpfs = async () => {
    console.log("adding to IPFS...");
    setUploading(true);
    const added = await ipfs.add(file, {
      progress: (prog) => console.log(`received: ${prog}`),
    });
    notify("success", `Added File to IPFS: ${added.cid.toString()}`);
    setUploading(false);
  };

  return (
    <>
      <div className="app-container m-5">
        <Row className="justify-content-center">
          <div>
            <h3 className="mb-4">Upload Files to IPFS</h3>
            {/* File Upload */}
            {!file && (
              <>
                <div id="upload-container">
                  <div id="fileUpload">
                    <input
                      id="file"
                      type="file"
                      name="file"
                      className="inputfile"
                      onChange={(e) => loadFile(e.target.files[0])}
                    />
                    <label htmlFor="file" id="fileLabel">
                      <p>Upload</p>
                    </label>
                  </div>
                </div>
                <p className="mt-3">
                  Please upload a PNG, GIF, WEBP, or MP4 Max 30mb
                </p>
              </>
            )}
            {fileName && (
              <label htmlFor="file" className="mb">
                <strong>File Uploaded: </strong>
                {fileName}
              </label>
            )}
          </div>
        </Row>

        <Button
          className="mt-5 mb-5"
          onClick={addToIpfs}
          disabled={!file || !account}
          size="lg"
        >
          {uploading ? (
            <Row className="align-items-center">
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className="ml-2 mr-2"
              />
              <div className="mr-2">Uploading</div>
            </Row>
          ) : (
            "Add to IPFS"
          )}
        </Button>
      </div>
    </>
  );
}
