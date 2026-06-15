package com.example.configmanager.dto;

public class SettingDTO {

    private String keyName;

    private String value;

    private String description;

    private String category;

    private Boolean systemSetting;

    public String getKeyName() {
        return keyName;
    }

    public void setKeyName(String keyName) {
        this.keyName = keyName;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean getSystemSetting() {
        return systemSetting;
    }

    public void setSystemSetting(Boolean systemSetting) {
        this.systemSetting = systemSetting;
    }
}