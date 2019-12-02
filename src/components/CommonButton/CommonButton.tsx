import React from 'react';
import { CustomBlueButton, CustomGreenButton, CustomOrangeButton } from './style';

export const CommonGreenButton: React.SFC = ({ children }) => <CustomGreenButton>{children}</CustomGreenButton>;

export const CommonBlueButton: React.SFC = ({ children }) => <CustomBlueButton>{children}</CustomBlueButton>;

export const CommonOrangeButton: React.SFC = ({ children }) => <CustomOrangeButton>{children}</CustomOrangeButton>;
