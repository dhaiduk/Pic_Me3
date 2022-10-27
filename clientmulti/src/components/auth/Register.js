import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button
} from 'react-native';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const buttons = [
  {
    name: 'name',
    describe: 'Name'
  },
  {
    name: 'email',
    describe: 'Email Address'
  },
  {
    name: 'password',
    describe: 'Password'
  },
  {
    name: 'password2',
    describe: 'Confirm Password'
  }
];

const Separator = () => <View style={styles.separator} />;

const Register = (props) => {

  const { navigation } = props;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { name, email, password, password2 } = formData;

  const onChange = (name, value) => {
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  
  const onSubmit = async (e) => {

    console.log(name, email, password)
    register({ name, email, password });
    navigation.navigate('Home');
    /*
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
    */

  };

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <View key={button.name + 'view'}>
          <Text style={styles.title} key={button.describe + 'title'}>
            {button.describe}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(button.name, value)}
            placeholder={button.name}
            value={formData[button.name]}
            key={button.name}
          />
        </View>
      ))}
      <Button
        title="Register"
        onPress={onSubmit}
        style={styles.buttons}
        key="register"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  title: {
    textAlign: 'center',
    marginVertical: 8
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  buttons: {
    marginVertical: 8,
    marginHorizontal: 16
  }
});

export default Register;

/*import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
 */
