import { UploadFile } from "@mui/icons-material";
import { FormControl, FormHelperText, Typography } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps {}

export default function AppDropZone(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: null });

  const dropZoneStyles = {
    display: 'flex',
    border: 'dashed 3px #eee',
    borderColor: '#eee',
    borderRadius: '5px',
    paddingTop: '30px',
    alignItems: 'center',
    height: 200,
    width: 500
  }

  const dropZoneActive = {
    borderColor: 'green'
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles[0] = Object.assign(acceptedFiles[0], {
      preview: URL.createObjectURL(acceptedFiles[0]),
    });
    field.onChange(acceptedFiles[0]);
  }, [field]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <FormControl style={isDragActive ? {...dropZoneStyles, ...dropZoneActive} : dropZoneStyles} error={!!fieldState.error}>
        <input style={{border: 'none'}} {...getInputProps} />
        <UploadFile sx={{fontSize: '100px'}}/>
        <Typography variant='h4'>Drop Image here</Typography>
        <FormHelperText>{fieldState.error?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}
