import React from 'react';
import { Dropzone, FileMosaic } from '@files-ui/react';

const FileInput = (props) => {
	const { files, setFiles, label } = props;

	const updateFiles = (incomingFiles) => {
		setFiles(incomingFiles);
	};

	const removeFile = (id) => {
		setFiles(files.filter((x) => x.id !== id));
	};

	return (
		<Dropzone
			onChange={updateFiles}
			value={files}
			accept='.json'
			maxFiles={1}
			style={{ width: '50vw' }}
			label={label}
			color='#6200EE'
			background='radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)'
		>
			{files.map((file) => (
				<FileMosaic key={file.id} {...file} onDelete={removeFile} />
			))}
		</Dropzone>
	);
};

export default FileInput;
