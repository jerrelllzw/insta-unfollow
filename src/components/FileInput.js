import React from 'react';
import { Dropzone, FileMosaic } from '@files-ui/react';

const FileInput = (props) => {
	const { files, setFiles } = props;

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
			maxFiles={2}
			style={{ width: '50vw' }}
			label={'Drop your followers_1.json and following.json files here'}
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
