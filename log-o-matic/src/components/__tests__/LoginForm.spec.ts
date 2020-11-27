import { mount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm.vue";
import Vue from "vue";
import vuetify from "vuetify";
import Vuex from "vuex";
import store from "@/store";

describe("LoginForm.vue", () => {
  let testStore: any;

  beforeEach(() => {
    Vue.use(vuetify);
  });

  it("tests to login as admin with correct information and error message is not shown", async () => {
    testStore = store;

    testStore.dispatch = jest.fn();

    const wrapper = mount(LoginForm, {
      store: testStore
    });

    const email = "admin@nti.se";
    const password = "123";

    await wrapper.find('[data-unit="username"]').setValue(email);
    await wrapper.find('[data-unit="password"]').setValue(password);
    await wrapper.find('[data-unit="login-btn"]').trigger("click");

    expect(testStore.dispatch).toHaveBeenCalledWith("authorize", {
      email: email,
      password: password
    });
  });

  it("tests to login as admin with incorrect information and error message is shown", async () => {
    const wrapper = mount(LoginForm, {
      store: store
    });

    await wrapper.find('[data-unit="username"]').setValue("senapsgurkmajonös");
    await wrapper.find('[data-unit="password"]').setValue("fyfan");
    await wrapper.find('[data-unit="login-btn"]').trigger("click");
    const errorElement = await wrapper.find('[data-unit="error_message"]');

    expect(errorElement.text()).toBe("Wrong email or password");
  });
});
