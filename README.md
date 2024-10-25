# Silencio - Checkin

![Silenio Logo](/public/SILENCIO.png)

## Overview

Silencio - Checkin is a Next.js application designed to manage user authentication and concert check-in processes. It leverages `next-auth` for authentication and uses local storage to manage user login status messages.

## Functionality

### Authentication and Sign-out

The application uses `next-auth/react` for handling user authentication. The `signOut` function is used across various components to log users out and redirect them to the sign-in page.

### User Feedback

The application provides feedback to users based on different scenarios related to concert check-ins. This feedback is stored in the browser's local storage under the key `loginStatus`. Here are the different scenarios:

1. **Invalid Email Link**: If the email link does not exist, the user is notified with the message "Email liên kết không tồn tại" and is signed out.

2. **No Concert Ticket**: If a user attempts to check in without a concert ticket, they receive the message "Xin lỗi, nhưng vé của bạn không có concert!" and are signed out.

3. **Successful Concert Check-in**: Upon successful check-in, users are greeted with "Chúc bạn có 1 đêm concert thật nồng cháy 🔥" and are signed out.

4. **Re-login Required**: If re-login is necessary for concert check-in, users see "Bạn hãy login lại để check-in concert" and are signed out.

5. **Check-in Reminder**: Users who have purchased specific ticket types are reminded to check in at a specified time with the message "Hãy quay lại check-in concert bằng website này vào lúc 19:30 nếu bạn đã mua hạng vé Bầu!" and are signed out.

### Code Structure

Each scenario is encapsulated in a separate component within the `src/app/(signout)` directory. These components use the `useEffect` hook to set the login status message and trigger the sign-out process.

## Technologies Used

- **Next.js**: For server-side rendering and building the application.
- **next-auth**: For handling authentication processes.
- **React**: For building user interfaces.

## License

Developed and all rights reserved to VTEAM & VECTR.
<br/>
<a href="https://linktr.ee/VTEAM_VCP" target="_blank">
<img src="/public/logo-transparent.png" alt="VTEAM Logo" width="120" height="100" />
</a>
<a href="https://linktr.ee/vectr.vcp" target="_blank">
<img src="/public/vectr.png" alt="Vectr Logo" width="100" height="100" />
</a>
