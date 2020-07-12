/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-button';
import {observer} from 'mobx-react';
import DatePicker from 'react-native-datepicker';
import {Picker, ScrollView, CheckBox, Alert, Slider} from 'react-native';
import {observable} from 'mobx';
import {ColorPicker, fromHsv} from 'react-native-color-picker';

import {
  SignUpHeading,
  ContainerCard,
  TextComponent,
  InputComponent,
  FirstNameLastNameWrapper,
  LongTextInputComponent,
  RadioButtonWrapper,
  DateAndPickerWrapper,
  LabelWraaper,
  CheckBoxWrapper,
  AddressWrapper,
  MediumInput,
  SignUpButtonView,
  SignUpButtonText,
  TouchbleSignUp,
  SliderWrapper,
  StyledSlider,
  ColorPickersWrapper,
  WhiteText,
} from './styledComponent';
console.disableYellowBox = true;
@observer
class SignUpPage extends React.Component {
  @observable username!: string;
  @observable email!: string;
  @observable password!: string;
  @observable lastname!: string;
  @observable confirmPassword!: string;
  @observable selectedPicker!: string;
  @observable selectedDate: string = '09-07-2020';
  @observable address!: string;
  @observable typingSpeed: number = 1;
  @observable mobileNumber: string = '';
  @observable isChecked: boolean = false;
  @observable gender: string = 'male';
  @observable selectedColorOne: string = '#0697d7';
  @observable selectedColorTwo: string = '#7a5b95';
  @observable usernameError = '';
  @observable lastnameError = '';
  @observable mobileNumberError = '';
  @observable emailError = '';
  @observable passwordError = '';
  @observable confirmPasswordError = '';
  @observable addressError = '';
  @observable checkboxError = '';
  setColorOne = value => {
    this.selectedColorOne = value;
  };

  setColorTwo = value => {
    this.selectedColorTwo = value;
  };

  onChangeUsername = username => {
    this.username = username;
  };

  onChangePassword = password => {
    this.password = password;
  };

  onChangeConfirmPassword = password => {
    this.confirmPassword = password;
  };

  onChangeEmail = mail => {
    this.email = mail;
  };

  onChangeLastName = lastname => {
    this.lastname = lastname;
  };

  onChangeMobileNumber = value => {
    this.mobileNumber = value;
  };

  setTypingSpeed = value => {
    this.typingSpeed = Math.round(value);
  };

  setRadioValue = value => {
    this.gender = value;
  };
  setPickerValue = value => {
    this.selectedPicker = value;
  };
  onChangeTextArea = value => {
    this.address = value;
  };
  setDateValue = date => {
    this.selectedDate = date;
  };
  changeIsChecked = () => {
    this.isChecked = !this.isChecked;
  };
  onSubmitForm = () => {};

  validateUserName = () => {
    Alert.alert('username validation');
    if (/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(this.username)) {
      this.usernameError = '';
    } else {
      this.usernameError = '**required';
    }
  };

  validateLastName = () => {
    Alert.alert('password validation');
    if (/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(this.lastname)) {
      this.lastnameError = '';
    } else {
      this.lastnameError = '**required';
    }
  };

  validateMobileNumber = () => {
    if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobileNumber)) {
      this.mobileNumberError = '';
    } else {
      this.mobileNumberError = 'invalid number';
    }
  };

  validateEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(this.email)) {
      this.emailError = '';
    } else {
      this.emailError = 'enter valid mail';
    }
  };

  validatePassword = () => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/;
    if (re.test(this.password)) {
      this.passwordError = '';
    } else {
      this.passwordError = 'password must be strong';
    }
  };

  validateConfirmPassword = () => {
    this.confirmPasswordError =
      this.password === this.confirmPassword
        ? ''
        : 'password and confirm password must be same';
  };

  render() {
    const radio_props = [
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'},
      {label: 'Other', value: 'Other'},
    ];
    return (
      <ScrollView>
        <LinearGradient
          colors={[this.selectedColorOne, this.selectedColorTwo]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <ColorPickersWrapper>
            <WhiteText> Select Your Color here :)</WhiteText>
            <ColorPicker
              color={this.selectedColorOne}
              onColorSelected={color => this.setColorOne(`${color}`)}
              onColorChange={color => this.setColorOne(`${fromHsv(color)}`)}
              hideSliders={true}
              style={{flex: 1, height: 60, width: 60, marginRight: -60}}
            />
            <ColorPicker
              color={this.selectedColorTwo}
              onColorSelected={color => this.setColorTwo(`${color}`)}
              onColorChange={color => this.setColorTwo(`${fromHsv(color)}`)}
              hideSliders={true}
              style={{flex: 1, height: 60, width: 60}}
            />
          </ColorPickersWrapper>
          <ContainerCard>
            <SignUpHeading>Sign Up</SignUpHeading>
            <TextComponent>
              Please Fill In This Form To Create An Account
            </TextComponent>
            <FirstNameLastNameWrapper>
              <InputComponent
                onBlur={this.validateUserName}
                onChangeText={name => {
                  this.onChangeUsername(name);
                }}
                placeholder="First Name"
              />
              <InputComponent
                onBlur={this.validateLastName}
                onChangeText={name => {
                  this.onChangeLastName(name);
                }}
                placeholder="Last Name"
              />
            </FirstNameLastNameWrapper>
            <LongTextInputComponent
              onEndEditing={this.validateMobileNumber}
              onChangeText={number => {
                this.onChangeMobileNumber(number);
              }}
              placeholder="Mobile Number"
            />
            <LongTextInputComponent
              onBlur={this.validateEmail}
              onChangeText={mail => {
                this.onChangeEmail(mail);
              }}
              placeholder="Email"
            />
            <LongTextInputComponent
              onBlur={this.validatePassword}
              onChangeText={password => {
                this.onChangePassword(password);
              }}
              secureTextEntry={true}
              placeholder="Password"
            />
            <LongTextInputComponent
              onBlur={this.validateConfirmPassword}
              onChangeText={password => {
                this.onChangeConfirmPassword(password);
              }}
              secureTextEntry={true}
              placeholder="Confirm Password"
            />
            <RadioButtonWrapper>
              <TextComponent>Gender</TextComponent>
              <RadioForm
                formHorizontal={true}
                radio_props={radio_props}
                initial={0}
                buttonSize={16}
                buttonOuterSize={17}
                buttonColor={'#dedede'}
                selectedButtonColor={'gray'}
                labelColor={'#dedede'}
                onPress={value => {
                  this.setRadioValue(value);
                }}
              />
            </RadioButtonWrapper>
            <DateAndPickerWrapper>
              <LabelWraaper>
                <TextComponent>Branch</TextComponent>
                <Picker
                  style={{height: 40, width: 130, margin: 5}}
                  selectedValue={this.selectedPicker}
                  onValueChange={itemValue => this.setPickerValue(itemValue)}>
                  <Picker.Item label="CSE" value="cse" />
                  <Picker.Item label="MECH" value="mech" />
                  <Picker.Item label="CHEM" value="chem" />
                  <Picker.Item label="ECE" value="ece" />
                </Picker>
              </LabelWraaper>
            </DateAndPickerWrapper>
            <LabelWraaper>
              <TextComponent>DOB </TextComponent>
              <DatePicker
                style={{width: 200, marginBottom: 10}}
                date={this.selectedDate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2020-07-19"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={date => {
                  this.setDateValue(date);
                }}
              />
            </LabelWraaper>
            <AddressWrapper>
              <TextComponent>Address : </TextComponent>
              {/* <StyledAddress
              onChangeText={this.onChangeTextArea}
              placeholder={'Type your address here .....!'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            /> */}
              <MediumInput
                onChangeText={this.onChangeTextArea}
                multiline={true}
                numberOfLines={4}
                placeholder="Enter Your Address Here...!"
              />
            </AddressWrapper>
            <SliderWrapper>
              <StyledSlider
                minimumValue={1}
                maximumValue={100}
                onValueChange={value => this.setTypingSpeed(value)}
              />
              <TextComponent>{this.typingSpeed}</TextComponent>
            </SliderWrapper>
            <CheckBoxWrapper>
              <CheckBox
                value={this.isChecked}
                onValueChange={this.changeIsChecked}
              />
              <TextComponent>
                I Accept the terms od Use & Privacy Policy
              </TextComponent>
            </CheckBoxWrapper>
            <TouchbleSignUp onPress={this.onSubmitForm}>
              <SignUpButtonView>
                <SignUpButtonText>Sign Up</SignUpButtonText>
              </SignUpButtonView>
            </TouchbleSignUp>
          </ContainerCard>
        </LinearGradient>
      </ScrollView>
    );
  }
}
export default SignUpPage;
