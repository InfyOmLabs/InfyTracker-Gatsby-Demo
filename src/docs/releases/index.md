---
path: "/releases"
title: "Releases"
---

# Releases

You can find what changes, features and bug fixed into some specific version here. we are also providing guide to upgrade from old version to newer version.

## Release Notes
### v2.0.1

##### Fixes

- Fixed: OneSignal webpush notifications are not enabling
- Fixed: Emoji's are showing as text while sending message

##### Enhancements

- Laravel version update from `6.13.1` to `6.15.1`

### v2.0.0

##### Features

- Group Chat support added
- Public vs Private Groups
- Open vs Close Groups
- Groups Members Management (Admin, Add/Remove Members)
- Real time updates when user change his profile

##### Enhancements

- Laravel version update from `6.12.0` to `6.13.1`
- Queries Optimization
- Number of Channels Optimization

##### Fixes

- Remove the timeline when last message from that timeline is deleted
- Fixed: update unread conversations count 

### v1.4.1

##### Enhancements

- Laravel version update from `6.9.0` to `6.12.0`
- Roles modules converted to Datatables

##### Fixes
- Fixed: User online/offline status is not displaying proper
- Fixed: Sidebar menu is not being selected 

### v1.4.0

##### Features

- Blocked users list added 
- Block-Unblock real time updates

##### Enhancements

- Composer packages updated
- Confirmation popup while blocking-unblocking users
- Added asterisk (*) after label for all required fields
- Users list for chat is now updated real time while blocking-unblocking users

##### Fixes
- Fixed: User status should not be display after blocking it.

### v1.3.0

##### Features

- S3 file upload support added
- Remove profile image support added
- Uploaded file preview support added
- Show text like `You have blokced this user.` OR `You are blocked by this user.` when user block each others.
- Show count of unread conversations on tab

##### Enhancements

- Laravel version updated from `6.8.0` to `6.9.0`
- Use `sweet-alert` popup while deleting users/roles
- Delete conversation icon changed

##### Fixes
- Remove media at a time from side profile bar when media is deleted.

### v1.2.0

##### Features

- Webpush Notifications Added
- Social Auth - Google + Facebook
- Change Password Option
- Abuse word filtering 
- User initials Added
- Block Unblock Users Added
- Single Message Delete Implemented
- Shared Media Collection on side profile bar

##### Enhancements

- Laravel version updated from `6.0.1` to `6.8.0`
- Simple mail template changed to markdown mail
- Password fields removed from edit user modal
- Logout icon changed
- Use Markdown mail instead of simple mail templates
- Send verification email when new user is created as InActive by admin
- Loader moved to center on conversation tab.

##### Fixes
- Role name make required and toast validation errors
- User create/edit name,email fields make required and add toast validation errors
- Show success message after sending reset password link
- Removed `config/excel.php` as it's not use anywhere
- Logout route `302 not found` issue fixed

### v1.1.0

##### Features

- Emoji support added 
- Delete conversation support added
- Draft message support added
- Added email in conversation user profile

##### Enhancements

- Reduce width of action column in roles table
- Security for subscribing channel improved, login user can only subscribe their channels
- User will redirect to login screen after logout
- Show file name into dropzone file upload

##### Fixes

- Fixed collapse issue of side menu UI
- Chat bubble width adjusted
- Fixed new message append issue when there is so many unread messages
- Fixed sent messages will be displayed double in chat container
